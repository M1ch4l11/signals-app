# SignalsApp

Angular goes to the new era, more easier for developers, !! finally !!
Enjoy new concept in basic login app.

## Writable signals

This concept is central to signals, enabling us to make this methods :
  set: set the signal, if the signal already exists, it will replace it
  update: In this case is the same as set(), but we can proccesing existing signal
  mutate: Finally a concept that every Angular developer will be in love, Mutate "we change the signal without replacing existing signal" signal in real time

## Computed signals

deriving signals from other signals:
 signal = computed( () => existingSignal() + 2)
If the value in the existing signal changes, calculate() is executed for signal
