## Questions

- Is our pir motion sensor working?
- Solder radios for RSS
- How to send/connect radio to Pi (Cant use XCTU on Pi)
- Actuator? Can we just do one LED?

## 3/8/2018

Notes from Marc - RSSI
I toyed with an XBee shield with a jumper wire soldered to XBee's RSSI pin.  For some reason Arduino’s pulseIn function doesn’t want to work with the RSSI pin.  It just outputs 0s for the PWM.  I think it’s because Arduino’s PWM sample rate is too slow to record XBee’s output.

When I hooked up the RSSI jumper to an analog pin and did analogRead, I was able to see values change whenever a radio packet was received.  I also set Arduino’s analogReference to EXTERNAL and hooked up a wire between 3.3v and AREF (so the values go from 0 to 1023).

To get RSSI working using a pin, you’ll have to use analogRead over some period of time and literally count the number of values greater than 512 vs. total reads.  Then you can work out a percentage to calculate the PWM.

Or - you could just use XBee’s API mode and get the RSSI value from each received packet.  I don’t know which would be a bigger pain in the butt.  Probably working with API mode..

Or - command mode

---

Enter command mode: `+++`
(may need to delay for a bit after +++ command)
Get decibal hex value of rssi: `ATDB`

## 3/9/2018

1. Create state diagram
    - reed switch
    - proximity
    - led
    - rssi
    - r.pi
    - website