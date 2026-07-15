// SLIDERS
let energy = slider(0.949,0,1)
let chaos  = slider(0.24,0,1)
let tone   = slider(0.365,0,1)
let space  = slider(0.615,0,1)
let tempo  = slider(0.905,0.5,1.75)

// LEAD
$: note("c2 ~*6 g2 ~, c3 ~ <g2 bb2> ~ eb2 <bb2 d3> bb2 <c3 eb3>")
.cps(tempo)
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

// BASS

$: note("c2*3 g1*2 c1*3, c1 ~ c1 g1 ~ c1 ~ g1")
.cps(tempo)
.s("square")
.lpf(tone.range(120,260))
.gain(0.8)
.color("<cyan magenta orange lime>")
._scope()

// DRUMS

$: stack(

  s("bd*4")
    .cps(tempo)
    .gain(energy.range(0.8,1.3))
    .shape(energy.range(0,0.4))
    .lpf(tone.range(120,1000))
    .room(space.range(0,0.2))
    .delay(space.range(0,0.08))
    .degradeBy(chaos.range(0,0.03)),

  s("~ rd sd rd sd rd sd rd")
    .cps(tempo)
    .gain(energy.range(0.15,0.45))
    .shape(energy.range(0,0.2))
    .lpf(tone.range(500,4000))
    .room(space.range(0,0.5))
    .delay(space.range(0,0.15))
    .pan(sine.slow(8).range(-0.4,0.4))
    .degradeBy(chaos.range(0,0.15))
    .color("<cyan magenta orange lime>")
    ._scope(),

  s("hh*16")
    .cps(tempo)
    .gain("0.12 0.05 0.18 0.05")
    .mul(energy.range(0.7,1.5))
    .shape(energy.range(0,0.3))
    .lpf(tone.range(3000,12000))
    .room(space.range(0,0.35))
    .delay(space.range(0,0.12))
    .pan(sine.slow(10).range(-0.8,0.8))
    .degradeBy(chaos.range(0,0.25))
    .color("<cyan magenta orange lime>")
    ._scope()

)
