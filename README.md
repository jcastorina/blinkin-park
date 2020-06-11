Silly Program of Randomness.

Push a A-Z key and your num lock light will blink with that letter's numerical position in the alphabet.

That's the only defined behavior, so prepare yourself for quirkiness if you do anything else.

Works on Linux only.

Runs in Node.

Just clone this project, then run:

~# npm install

Also, this uses the "xset" utility in the X Window system.  There are issues with xset operating the Num Lock light, which this program uses.

If you really actually wanna run this silly program, you'll need to modify your xkbcomp.  Don't worry, it's easy:

~# xkbcomp $DISPLAY myconf.xkb

Find the entries for Num Lock and Caps Lock, and remove the "!" in front of "!allowExplicit" definition, so that it reads as follows:

# indicator "Caps Lock" {
#    allowExplicit;
#    whichModState= locked;
#    modifiers= Lock;
# };
# indicator "Num Lock" {
#    allowExplicit;
#    whichModState= locked;
#    modifiers= NumLock;
# };

then load this modified file:

~# xkbcomp myconf.xkb $DISPLAY

You can also add this last line to your rc.local or comparable startup script(s) so that this functionality remains after reboot... which would be odd that you'd want to do any of this, but I thought I'd cover it for completeness sake! ^_^