function PicoControlGUI
    pico = serialport("COM3", 115200); % Adjust COM port
    configureTerminator(pico, "LF");

    openMainMenu(); % Launch main menu on start

    function openMainMenu()
        mainFig = uifigure('Name', 'Pico CNC Main Menu', 'Position', [100 100 400 300]);
        uilabel(mainFig, 'Text', 'Select Mode:', 'FontSize', 16, 'Position', [140 240 120 40]);

        uibutton(mainFig, 'Text', 'Manual Control', 'Position', [130 180 140 40], ...
            'ButtonPushedFcn', @(~,~) launchManualControl(mainFig));

        uibutton(mainFig, 'Text', 'Draw Shapes', 'Position', [130 120 140 40], ...
            'ButtonPushedFcn', @(~,~) launchDrawShapes(mainFig));

        uibutton(mainFig, 'Text', 'Emergency Stop', ...
            'Position', [260 20 120 30], 'BackgroundColor', [1 0 0], 'FontColor', [1 1 1], ...
            'ButtonPushedFcn', @(~,~) sendChar('e'));
    end

    %% Manual Control Mode
    function launchManualControl(parentFig)
        delete(parentFig);

        fig = uifigure('Name', 'Manual Mode', 'Position', [100 100 600 400]);
        fig.KeyPressFcn = @keyPressHandler;

        x = 0; y = 0; z = 0; spindle = 0;

        uilabel(fig, 'Text', 'X:', 'Position', [20 320 40 22]);
        xVal = uieditfield(fig, 'text', 'Position', [60 320 60 22], 'Value', '0');

        uilabel(fig, 'Text', 'Y:', 'Position', [140 320 40 22]);
        yVal = uieditfield(fig, 'text', 'Position', [180 320 60 22], 'Value', '0');

        uilabel(fig, 'Text', 'Z:', 'Position', [260 320 40 22]);
        zVal = uieditfield(fig, 'text', 'Position', [300 320 60 22], 'Value', '0');

        uilabel(fig, 'Text', 'Spindle:', 'Position', [380 320 70 22]);
        spindleVal = uieditfield(fig, 'text', 'Position', [450 320 60 22], 'Value', '0');

        txtArea = uitextarea(fig, 'Position', [20 20 560 200], 'Editable', 'off');

        % Arrow Controls
        uibutton(fig, 'Text', '↑', 'Position', [260 250 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('w'));
        uibutton(fig, 'Text', '↓', 'Position', [260 210 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('s'));
        uibutton(fig, 'Text', '←', 'Position', [220 230 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('a'));
        uibutton(fig, 'Text', '→', 'Position', [300 230 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('d'));
        uibutton(fig, 'Text', 'Z+', 'Position', [360 250 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('f'));
        uibutton(fig, 'Text', 'Z-', 'Position', [360 210 40 30], 'ButtonPushedFcn', @(~,~) sendCommand('g'));

        uibutton(fig, 'Text', 'Spindle +', 'Position', [420 250 100 30], 'ButtonPushedFcn', @(~,~) sendCommand('p'));
        uibutton(fig, 'Text', 'Spindle -', 'Position', [420 210 100 30], 'ButtonPushedFcn', @(~,~) sendCommand('o'));
        uibutton(fig, 'Text', 'Spindle Off', 'Position', [420 170 100 30], 'ButtonPushedFcn', @(~,~) sendCommand('x'));

        uibutton(fig, 'Text', '← Back to Menu', 'Position', [20 250 100 30], 'ButtonPushedFcn', @(~,~) goBack(fig));
        uibutton(fig, 'Text', 'Emergency Stop', 'Position', [460 20 120 30], ...
            'BackgroundColor', [1 0 0], 'FontColor', [1 1 1], 'ButtonPushedFcn', @(~,~) sendCommand('e'));

        function sendCommand(cmd)
            writeline(pico, cmd);
            switch cmd
                case 'w', y = y + 1;
                case 's', y = y - 1;
                case 'a', x = x - 1;
                case 'd', x = x + 1;
                case 'f', z = z + 1;
                case 'g', z = z - 1;
                case 'p', spindle = min(spindle + 1, 10);
                case 'o', spindle = max(spindle - 1, 0);
                case 'x', spindle = 0;
            end
            updateDisplay();
        end

        function updateDisplay()
            xVal.Value = string(x);
            yVal.Value = string(y);
            zVal.Value = string(z);
            spindleVal.Value = string(spindle);
        end

        function keyPressHandler(~, event)
            keys = {'w','s','a','d','f','g','p','o','x'};
            if ismember(event.Key, keys)
                sendCommand(event.Key);
            end
        end
    end

    %% Draw Shapes Mode
    function launchDrawShapes(parentFig)
        delete(parentFig);
        fig = uifigure('Name', 'Draw Shapes', 'Position', [100 100 400 300]);

        uibutton(fig, 'Text', 'Draw House', 'Position', [150 200 100 30], 'ButtonPushedFcn', @(~,~) sendChar('n'));
        uibutton(fig, 'Text', 'Draw Square', 'Position', [150 150 100 30], 'ButtonPushedFcn', @(~,~) sendChar('m'));
        uibutton(fig, 'Text', 'Draw Circle', 'Position', [150 100 100 30], 'ButtonPushedFcn', @(~,~) sendChar('c'));
        uibutton(fig, 'Text', '← Back to Menu', 'Position', [20 20 100 30], 'ButtonPushedFcn', @(~,~) goBack(fig));
        uibutton(fig, 'Text', 'Emergency Stop', ...
            'Position', [260 20 120 30], 'BackgroundColor', [1 0 0], ...
            'FontColor', [1 1 1], 'ButtonPushedFcn', @(~,~) sendChar('e'));
    end

    %% Shared Helpers
    function sendChar(key)
        try
            writeline(pico, key);
        catch err
            disp(['Serial error: ', err.message]);
        end
    end

    function goBack(fig)
        delete(fig);
        openMainMenu();
    end
end
