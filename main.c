/**************************************************************
 * main.c
 * rev 1.2 31-Mar-2025
 **************************************************************/

 #include "pico/stdlib.h"
 #include <stdbool.h>
 #include <stdlib.h>
 #include <stdio.h>
 #include <string.h>
 #include <math.h>
 #include "hardware/pwm.h"
 #include "hardware/adc.h"
 
 // Stepper motor control pins
 // X motor
 #define STEP_PIN_X 19
 #define DIR_PIN_X 18
 
 // Y motor
 #define STEP_PIN_Y 21
 #define DIR_PIN_Y 20
 
 // Z motor
 #define STEP_PIN_Z 17
 #define DIR_PIN_Z 16
 
 // Enable
 #define ENABLE_PIN 15
 
 // Spindle Enable
 #define SPINDLE_EN 13
 
 // Limit Switches
 #define LIMIT_SWITCH_PIN_X1 12
 #define LIMIT_SWITCH_PIN_X2 9
 #define LIMIT_SWITCH_PIN_Y1 11
 #define LIMIT_SWITCH_PIN_Y2 10
 
 // Limit Switches state
 bool limit_switch_pressed_x1;
 bool limit_switch_pressed_x2;
 bool limit_switch_pressed_y1;
 bool limit_switch_pressed_y2;
 
 // User-defined variables
 //Steps
 int steps = 0;
 // Current location
 int cal_x;
 int cal_y;
 int x_curr;
 int y_curr;
 int z_curr = 0;
 
 // Function to move the stepper motor
 void stepping(int axis_step_pin, int axis_direction_pin, int axis_direction)
 {
   // Set the direction pin to forward(1) or reverse(0)
   gpio_put(axis_direction_pin, axis_direction);
   sleep_us(500);
   // Do steps using the step pin and the direction pin
   for (int i = 0; i < steps; i++)
   {
     // Fist check if the limit switch is pressed
     limit_switch_pressed_x1 = !gpio_get(LIMIT_SWITCH_PIN_X1); // Assuming pull-up, LOW when pressed
     limit_switch_pressed_y1 = !gpio_get(LIMIT_SWITCH_PIN_Y1); // Assuming pull-up, LOW when pressed
     limit_switch_pressed_x2 = !gpio_get(LIMIT_SWITCH_PIN_X2); // Assuming pull-up, LOW when pressed
     limit_switch_pressed_y2 = !gpio_get(LIMIT_SWITCH_PIN_Y2); // Assuming pull-up, LOW when pressed
 
     if (limit_switch_pressed_x1 || limit_switch_pressed_x2 || limit_switch_pressed_y1 || limit_switch_pressed_y2)
     {
       break;
     }
     //step motor
     gpio_put(axis_step_pin, 1);
     sleep_us(1000);
     gpio_put(axis_step_pin, 0);
     sleep_us(1000);
 
     // Update current position
     // Update X axis
     if (axis_direction == 0 && axis_direction_pin == DIR_PIN_X)
     {
       x_curr--; // -X
       cal_x--;
     }
     else if (axis_direction == 1 && axis_direction_pin == DIR_PIN_X)
     {
       x_curr++; // +X
       cal_x++;
     }
     // Update Y axis
     else if (axis_direction == 0 && axis_direction_pin == DIR_PIN_Y)
     {
       y_curr++; // +Y
       cal_y++;
     }
     else if (axis_direction == 1 && axis_direction_pin == DIR_PIN_Y)
     {
       y_curr--; // -Y
       cal_y--;
     }
   }
   // Check if limit switch is pressed after stepping
   if (limit_switch_pressed_x1 || limit_switch_pressed_x2 || limit_switch_pressed_y1 || limit_switch_pressed_y2)
   // If limit switch is pressed, reverse the direction and move back
   {
     if (axis_direction == true)
     {
       axis_direction = false;
       gpio_put(axis_direction_pin, axis_direction);
       for (int i = 0; i < 400; i++)
       {
         gpio_put(axis_step_pin, 1);
         sleep_us(1000);
         gpio_put(axis_step_pin, 0);
         sleep_us(1000);
       }
       if (axis_direction_pin == DIR_PIN_Y)
       {
         y_curr = y_curr - 400; // -Y
       }
       else
       {
         x_curr = x_curr - 400; // -X
       }
     }
     else if (axis_direction == false)
     {
       axis_direction = true;
       gpio_put(axis_direction_pin, axis_direction);
       for (int i = 0; i < 400; i++)
       {
         gpio_put(axis_step_pin, 1);
         sleep_us(1000);
         gpio_put(axis_step_pin, 0);
         sleep_us(1000);
       }
       if (axis_direction_pin == DIR_PIN_Y)
       {
         y_curr = y_curr - 400; // +Y
       }
       else
       {
         x_curr = x_curr - 400; // +X
       }
     }
   }
 }
 
 // Calibrate function for Y axis
 void calibrate_y()
 {
   // Move until limit switch is pressed
   while (limit_switch_pressed_y1 == false)
   {
     stepping(STEP_PIN_Y, DIR_PIN_Y, true); // Move in the positive direction
   }
   cal_y = 0;
 }
 
 // Function to count the steps for Y axis
 void calibrate_y2()
 {
   // Move until limit switch is pressed
   while (limit_switch_pressed_y2 == false)
   {
     limit_switch_pressed_y2 = !gpio_get(LIMIT_SWITCH_PIN_Y2); // Assuming pull-up, LOW when pressed
 
     stepping(STEP_PIN_Y, DIR_PIN_Y, false); // Move in the positive direction
   }
   y_curr = cal_y / 2;
   printf("Y2 Calibrated. Steps: %d\n", y_curr);
 }
 
 // Calibrate function for X axis
 void calibrate_x()
 {
     // Move until limit switch is pressed
   while (limit_switch_pressed_x1 == false)
   {
     stepping(STEP_PIN_X, DIR_PIN_X, true); // Move in the negative direction
   }
   cal_x = 0;
 }
 
 // Function to count the steps for X axis
 void calibrate_x2()
 {
   // Move until limit switch is pressed
   while (limit_switch_pressed_x2 == false)
   {
     limit_switch_pressed_x2 = !gpio_get(LIMIT_SWITCH_PIN_X2); // Assuming pull-up, LOW when pressed
 
     stepping(STEP_PIN_X, DIR_PIN_X, false); // Move in the positive direction
   }
   x_curr = cal_x / 2;
   printf("X2 Calibrated. Steps: %d\n", x_curr);
 }
 
 // Center the machine from anywher and reset the current position to (0,0,0)
 void center()
 {
   if (x_curr < 0)
   {
     steps = abs(x_curr);
     stepping(STEP_PIN_X, DIR_PIN_X, 1);
   }
   else if (x_curr > 0)
   {
     steps = abs(x_curr);
     stepping(STEP_PIN_X, DIR_PIN_X, 0);
   }
   if (y_curr < 0)
   {
     steps = abs(y_curr);
     stepping(STEP_PIN_Y, DIR_PIN_Y, 0);
   }
   if (y_curr > 0)
   {
     steps = abs(y_curr);
     stepping(STEP_PIN_Y, DIR_PIN_Y, 1);
   }
   x_curr = 0;
   y_curr = 0;
   z_curr = 0;
 }
 
 // Draw a square with the current position as the starting point
 void draw_square()
 {
   steps = 400;
   stepping(STEP_PIN_X, DIR_PIN_X, 1);
   stepping(STEP_PIN_Y, DIR_PIN_Y, 1);
   stepping(STEP_PIN_X, DIR_PIN_X, 0);
   stepping(STEP_PIN_Y, DIR_PIN_Y, 0);
 }
 
 // Draw a circle with the radius of the circle as a parameter
 void draw_circle(int radius_units)
 {
   const int steps_per_unit = 200;
   const int segments = 180;
   const float angle_step = 2 * M_PI / segments;
   const float radius_steps = radius_units * steps_per_unit;
 
   // Treat current position as first point on circle
   float start_angle = 0; // Set this to change the starting angle if desired
 
   // Compute the center of the circle based on current position and start angle
   float cx = x_curr - cosf(start_angle) * radius_steps;
   float cy = y_curr - sinf(start_angle) * radius_steps;
 
   float angle = start_angle;
 
   for (int i = 0; i <= segments; i++)
   {
     int x1 = (int)(cx + cosf(angle) * radius_steps);
     int y1 = (int)(cy + sinf(angle) * radius_steps);
 
     int dx = x1 - x_curr;
     int dy = y1 - y_curr;
 
     // Move in X
     steps = abs(dx);
     if (dx < 0)
       stepping(STEP_PIN_X, DIR_PIN_X, 0);
     else if (dx > 0)
       stepping(STEP_PIN_X, DIR_PIN_X, 1);
 
     // Move in Y
     steps = abs(dy);
     if (dy < 0)
       stepping(STEP_PIN_Y, DIR_PIN_Y, 1);
     else if (dy > 0)
       stepping(STEP_PIN_Y, DIR_PIN_Y, 0);
 
     x_curr = x1;
     y_curr = y1;
 
     angle += angle_step;
   }
 
   printf("Finished drawing circle with radius: %d units\n", radius_units);
 }
 
 // Draw a house with the current position as the starting point
 void draw_house()
 {
   steps = 1000;
   stepping(STEP_PIN_X, DIR_PIN_X, false);
   steps = 800;
   stepping(STEP_PIN_Y, DIR_PIN_Y, false);
   steps = 1000;
   stepping(STEP_PIN_X, DIR_PIN_X, true);
   steps = 800;
   stepping(STEP_PIN_Y, DIR_PIN_Y, true);
   steps = 1;
   for (int t = 0; t < 400; t++)
   {
     stepping(STEP_PIN_X, DIR_PIN_X, 1);
     stepping(STEP_PIN_Y, DIR_PIN_Y, 0);
   }
   for (int t = 0; t < 400; t++)
   {
     stepping(STEP_PIN_X, DIR_PIN_X, 0);
     stepping(STEP_PIN_Y, DIR_PIN_Y, 0);
   }
 }
 
 // Function to move to a specific X, Y, Z coordinate using Bresenham's algorithm
 // This function assumes that the machine is already calibrated and centered
 void move_to(int x_target_units, int y_target_units, int z_target_units)
 {
   const int steps_per_unit = 200;
 
   int x0 = x_curr;
   int y0 = y_curr;
 
   int x1 = x_target_units * steps_per_unit;
   int y1 = y_target_units * steps_per_unit;
 
   int dx = abs(x1 - x0);
   int dy = abs(y1 - y0);
   int sx = (x0 < x1) ? 1 : -1;
   int sy = (y0 < y1) ? 1 : -1;
   int err = dx - dy;
 
   while (1)
   {
     if (x0 == x1 && y0 == y1)
       break;
 
     int e2 = 2 * err;
 
     // Step in X if needed
     if (e2 > -dy)
     {
       err -= dy;
       x0 += sx;
       steps = 1;
       stepping(STEP_PIN_X, DIR_PIN_X, sx > 0 ? 0 : 1);
     }
 
     // Step in Y if needed
     if (e2 < dx)
     {
       err += dx;
       y0 += sy;
       steps = 1;
       stepping(STEP_PIN_Y, DIR_PIN_Y, sy < 0 ? 1 : 0);
     }
   }
 
   x_curr = x1;
   y_curr = y1;
 
   // Z-axis handled separately
   int z_steps = abs(z_target_units * steps_per_unit - z_curr);
   if (z_target_units * steps_per_unit > z_curr)
   {
     steps = z_steps;
     stepping(STEP_PIN_Z, DIR_PIN_Z, 0); // Z up
   }
   else if (z_target_units * steps_per_unit < z_curr)
   {
     steps = z_steps;
     stepping(STEP_PIN_Z, DIR_PIN_Z, 1); // Z down
   }
 
   z_curr = z_target_units * steps_per_unit;
 
   printf("Moved to (units): X: %d Y: %d Z: %d\n", x1 / steps_per_unit, y1 / steps_per_unit, z_target_units);
 }
 
 // Function to print instructions for the user at the start of the program
 void print_instructions()
 {
   printf("CNC Milling Machine Instructions: \n");
   printf("r: reset machine to initial position and calibrate \n");
   printf("t: center the machine \n");
   printf("w: move the x axis up \n");
   printf("s: move the x axis down \n");
   printf("a: move the y axis left \n");
   printf("d: move the y axis right \n");
   printf("f: move the z axis up \n");
   printf("g: move the z axis down \n");
   printf("p: increase the spindle speed \n");
   printf("o: decrease the spindle speed \n");
   printf("x: spindle off \n");
   printf("n: draw a house \n");
   printf("m: draw a square \n");
   printf("c: draw a circle\n");
   printf("e: emergency stop \n");
   printf("u: move to X,Y,Z coordinate after centering machine (e.g., 1,-2,0)\n");
 }
 
 int main(void)
 {
   stdio_init_all();
 
   // Initialize GPIOs
   // Initialise X
   gpio_init(STEP_PIN_X);
   gpio_set_dir(STEP_PIN_X, GPIO_OUT);
   gpio_init(DIR_PIN_X);
   gpio_set_dir(DIR_PIN_X, GPIO_OUT);
   gpio_put(DIR_PIN_X, 1);
 
   // Initialise Y
   gpio_init(STEP_PIN_Y);
   gpio_set_dir(STEP_PIN_Y, GPIO_OUT);
   gpio_init(DIR_PIN_Y);
   gpio_set_dir(DIR_PIN_Y, GPIO_OUT);
   gpio_put(DIR_PIN_Y, 1);
 
   // Initialise Z
   gpio_init(STEP_PIN_Z);
   gpio_set_dir(STEP_PIN_Z, GPIO_OUT);
   gpio_init(DIR_PIN_Z);
   gpio_set_dir(DIR_PIN_Z, GPIO_OUT);
   gpio_put(DIR_PIN_Z, 1);
 
   // Initialise Enable
   gpio_init(ENABLE_PIN);
   gpio_set_dir(ENABLE_PIN, GPIO_OUT);
   gpio_put(ENABLE_PIN, 0);
 
   // Initialise Limit Switches
   gpio_init(LIMIT_SWITCH_PIN_X1);
   gpio_set_dir(LIMIT_SWITCH_PIN_X1, GPIO_IN);
   gpio_pull_up(LIMIT_SWITCH_PIN_X1);
   gpio_init(LIMIT_SWITCH_PIN_Y1);
   gpio_set_dir(LIMIT_SWITCH_PIN_Y1, GPIO_IN);
   gpio_pull_up(LIMIT_SWITCH_PIN_Y1);
   gpio_init(LIMIT_SWITCH_PIN_Y2);
   gpio_set_dir(LIMIT_SWITCH_PIN_Y2, GPIO_IN);
   gpio_pull_up(LIMIT_SWITCH_PIN_Y2);
   gpio_init(LIMIT_SWITCH_PIN_X2);
   gpio_set_dir(LIMIT_SWITCH_PIN_X2, GPIO_IN);
   gpio_pull_up(LIMIT_SWITCH_PIN_X2);
 
   bool first = true;
 
   // Initialise Spindle
   gpio_init(SPINDLE_EN);
   gpio_set_function(SPINDLE_EN, GPIO_FUNC_PWM);
 
   // Find spindle slice and channel
   uint slice_num_spin = pwm_gpio_to_slice_num(SPINDLE_EN);
   uint spindle_channel = pwm_gpio_to_channel(SPINDLE_EN);
 
   // Set the PWM frequency and duty cycle and enable it
   int spindle_value = 0;
   pwm_set_wrap(slice_num_spin, 200);
   pwm_set_chan_level(slice_num_spin, spindle_channel, 0);
   pwm_set_enabled(slice_num_spin, true);
 
   // Display the instructions after 15 seconds
   if (true)
   {
     sleep_ms(15000);
     print_instructions();
   }
   // Check the limit switches state at the start
   limit_switch_pressed_x1 = !gpio_get(LIMIT_SWITCH_PIN_X1); // Assuming pull-up, LOW when pressed
   limit_switch_pressed_y1 = !gpio_get(LIMIT_SWITCH_PIN_Y1); // Assuming pull-up, LOW when pressed
   limit_switch_pressed_x2 = !gpio_get(LIMIT_SWITCH_PIN_X2); // Assuming pull-up, LOW when pressed
   limit_switch_pressed_y2 = !gpio_get(LIMIT_SWITCH_PIN_Y2); // Assuming pull-up, LOW when pressed
 
   while (true)
   {
     // Call for a character from the terminal
     int ch = getchar_timeout_us(0);
     // Check if a character is available
     if (ch != -1)
     {
       switch (ch)
       {
 
       case 'w': // X axis up
         steps = 50;
         stepping(STEP_PIN_X, DIR_PIN_X, false);
         printf("X: %d Y: %d\n", x_curr, y_curr);
         break;
 
       case 's': // X axis down (y down)
         steps = 50;
         stepping(STEP_PIN_X, DIR_PIN_X, true);
         printf("X: %d Y: %d\n", x_curr, y_curr);
         break;
 
       case 'a': // Y axis left (x left)
         steps = 50;
         stepping(STEP_PIN_Y, DIR_PIN_Y, true);
         printf("X: %d Y: %d\n", x_curr, y_curr);
         break;
 
       case 'd': // Y axis right (x right)
         steps = 50;
         stepping(STEP_PIN_Y, DIR_PIN_Y, false);
         printf("X: %d Y: %d\n", x_curr, y_curr);
         break;
 
       case 'f': // Z axis up
         steps = 50;
         stepping(STEP_PIN_Z, DIR_PIN_Z, 0);
         break;
 
       case 'g': // Z axis down
         steps = 50;
         stepping(STEP_PIN_Z, DIR_PIN_Z, 1);
         break;
       case 'r':         // Reset
         steps = 10000;  // Set the number of steps to move
         calibrate_y();  // Call the calibrate function
         calibrate_x();  // Call the calibrate function
         calibrate_y2(); // Call the calibrate function to count steps
         calibrate_x2(); // Call the calibrate function to count steps
         break;
 
       case 't': // Center
         center();
         break;
 
       case 'p': // Spindle speed increasing
         if (spindle_value < 200)
         {
           if (first)
           {
             spindle_value = 40;
           }
           spindle_value = spindle_value + 20;
           pwm_set_chan_level(slice_num_spin, spindle_channel, (spindle_value));
           sleep_ms(100);
           printf("Spindle Speed: %d\n", spindle_value);
           first = false;
         }
         else
         {
           printf("At maximum speed\n");
         }
         break;
 
       case 'o': // Spindle speed decreasing
         if (spindle_value > 20)
         {
           spindle_value = spindle_value - 20;
           pwm_set_chan_level(slice_num_spin, spindle_channel, (spindle_value));
           sleep_ms(100);
           printf("Spindle Speed: %d\n", spindle_value);
         }
         else
         {
           printf("At minimum speed\n");
           first = true;
         }
         break;
 
       case 'x': // Spindle off
         pwm_set_chan_level(slice_num_spin, spindle_channel, 0);
         printf("Spindle Off\n");
         spindle_value = 40;
         break;
 
       case 'm': // Draw square
         draw_square();
         printf("Square drawn\n");
         break;
 
       case 'n': // Draw house
         draw_house();
         printf("House drawn\n");
         break;
 
       case 'e': // Emergency Stop
         pwm_set_chan_level(slice_num_spin, spindle_channel, 0);
         gpio_put(ENABLE_PIN, 1);
         printf("!!! Emergency Stop Activated !!!\n\r");
         break;
 
       case 'c':
       {
         draw_circle(4); // Draw a circle of radius 4 units
         break;
       }
 
       case 'u': // Move to X,Y,Z coordinate using buffer and Bresenham's algorithm
       {
         printf("Enter target X,Y,Z (e.g., 1,-2,0): ");
         char input[32];
         int idx = 0;
         char c;
 
         // Read characters until Enter (blocking)
         while (idx < sizeof(input) - 1)
         {
           c = getchar();
           if (c == '\r' || c == '\n')
             break;
           if (c >= 32 && c <= 126)
           { // Filter printable characters
             input[idx++] = c;
             putchar(c); // Echo
           }
           else if (c == 127 || c == 8)
           {
             idx--;
           }
         }
         input[idx] = '\0';
         printf("\n");
 
         // Now parse carefully, trimming spaces if needed
         int xt = 0, yt = 0, zt = 0;
         if (sscanf(input, " %d , %d , %d", &xt, &yt, &zt) == 3)
         {
           move_to(xt, yt, zt);
         }
         else
         {
           printf("Invalid format. Use: X,Y,Z (e.g., 1,-2,0)\n");
         }
         break;
       }
       default:
         printf("Please select a key from the approved list\n");
         break;
       }
     }
   }
 }