let energy = slider(0.35,0,1)
let chaos  = slider(0.05,0,1)
let tone   = slider(0.45,0,1)
let space  = slider(0.15,0,1)
let tempo  = slider(1,0.5,2)

$: note("[c2 c3] ~ <g2 bb2> ~ eb2 <bb2 d3> [g2 bb2] <c3 eb3>")
.fast(tempo)
.s("sawtooth")
.gain(energy.range(0.8,1.4))
.shape(energy.range(0,0.8))
.lpf(tone.range(300,4500)
.add(sine.slow(8).range(-250,700)))
.lpq(tone.range(5,18))
.delay(space.range(0,0.5))
.room(space.range(0,0.8))
.pan(sine.slow(12).range(-0.7,0.7))
.degradeBy(chaos.range(0,0.25))
.detune(sine.slow(16).range(-5,5))
.color("<cyan magenta orange lime>")
._scope()

// =========================
// BASS
// =========================

$: note("c1 ~ c1 g1 ~ c1 ~ g1")
.fast(tempo)
.s("square")
.lpf(tone.range(120,260))
.gain(0.8)
._scope()

// =========================
// DRUMS
// =========================

$: stack(
  s("bd*4"), s("~ hh cp hh hh hh hh hh")
  .gain(0.25)
  ._scope(),

  s("hh*16")
  .gain("0.12 0.05 0.18 0.05")
  ._scope()
)

.every(16,x=>x.rev())
