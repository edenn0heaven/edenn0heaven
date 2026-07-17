let tempo          = slider(2, 0.5, 3.5)
let gain           = slider(2.5, 0, 3)
let distorsionLEAD = slider(0.5, 0.5, 3)

// DRUMS
$: sound("[bd bd sd rd rd bd sd rd]/2")
  .fast(tempo)
  .color("magenta pink cyan")
  .scope()

// LEAD
$: note("e5 cb5 ~ c5, [e#3 <e3 eb3>] cb3 ~ <ab3 b3 c3>")
  .sound("square")
  .fast(tempo)
  .room(distorsionLEAD)
  .distort(distorsionLEAD)
  .color("magenta pink cyan")
  .scope()

// BASS
$: note("e@2 g2 a2")
  .sound("sine")
  .gain(gain)
  .fast(tempo)
  .color("magenta pink cyan")
  .scope()
