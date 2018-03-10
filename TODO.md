## Questions

Notes from Marc - RSSI
I toyed with an XBee shield with a jumper wire soldered to XBee's RSSI pin.  For some reason Arduino’s pulseIn function doesn’t want to work with the RSSI pin.  It just outputs 0s for the PWM.  I think it’s because Arduino’s PWM sample rate is too slow to record XBee’s output.

When I hooked up the RSSI jumper to an analog pin and did analogRead, I was able to see values change whenever a radio packet was received.  I also set Arduino’s analogReference to EXTERNAL and hooked up a wire between 3.3v and AREF (so the values go from 0 to 1023).

To get RSSI working using a pin, you’ll have to use analogRead over some period of time and literally count the number of values greater than 512 vs. total reads.  Then you can work out a percentage to calculate the PWM.

Or - you could just use XBee’s API mode and get the RSSI value from each received packet.  I don’t know which would be a bigger pain in the butt.  Probably working with API mode..

Or - command mode

Enter command mode: `+++`
(may need to delay for a bit after +++ command)
Get decibal hex value of rssi: `ATDB`

## 3/9/2018

1. Doorduino
    - improve -> distinguish between entering and leaving
    - Configure proximity sensor with longer wires, new bread board, and box

2. Wearableduino
    - figure out RSSI, create function to convert to distance
    - Start and stop RSSI

3. PI
    - delay after stop command

4. Website
    - Status partial on homescreen with rssi
    - History

5. General
    - Review data integrity

6. Presentation
    - When finished, review state diagram, redraw in marker
    - Delegate who says what and when
    - Create demo video?
    - Powerpoint