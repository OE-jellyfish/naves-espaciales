controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Rayos_Espaciales = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 6 . . . . . . . . 
        . . . . . . a 9 a . . . . . . . 
        . . . . . . a a a . . . . . . . 
        . . . . . . . a . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Nave_Espacial, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.coolRadial, 100)
    info.changeScoreBy(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let Nave_Enemiga: Sprite = null
let Rayos_Espaciales: Sprite = null
let Nave_Espacial: Sprite = null
scene.setBackgroundImage(img`
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffcccffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffcfcffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffcccffffffffffffffffffffffffffcfffffffcfffbff
    fffffffffffffffffffcccccfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffcccccccffffbff
    fffffffffffffffffffcfffcfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffcccccccfffffffffffffffffffffbff
    fffffffffffffffffffcfffcfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffcfffffffcffffffffffffffffffffbff
    fffffffffffffffffffcfffcfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffcfffffffcffffffffffffffffffffbff
    ffffffffcccccccffffcccccffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffcfffffffcffffffffffffffffffffbff
    fffffffcfffffffcffffffffffffffbffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffffffbffffffffffffffffffcfffffffcffffffffffffffffffffbff
    fffffffcfffffffcffffffffffffffbfffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffbfffffffffffffffffcfffffffcfffffffffffffffffffbfff
    fffffffcfffffffcfffffffffffffbffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffbfffffffffffffffffcfffffffcfffffffffffffffffffbfff
    fffffffcfffffffcfffffffffffffbffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffffffffffbffff
    fffffffcfffffffcfffffffffffffbffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffcccccccfffffffffffffffffffbffff
    fffffffcfffffffcffffffffffffbfffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffbfffff
    fffffffcfffffffcffffffffffffbfffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffbbbffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffbfffff
    ffffffffcccccccffffffffffffbffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffbbbfffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbffffff
    ffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffbbbfffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbffffff
    ffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffcccccfffffffffffffffffffbfffffff
    fffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffcfffcffffffffffffffffffbffffffff
    ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffcfffcfffffffffffffffffbfffffffff
    fffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffcfffcffffffffffffffffbffffffffff
    ffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffcccccffffffffffffffbbfffffffffff
    fffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffbbfffffffffffff
    ffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffbbfffffffffffffff
    ffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffbbfffffffffffffffff
    fffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbfffffffffffffffffff
    fffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffbbbffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffbbbffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffbbbffffff
    ffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffbfffbffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffbbfffffffffffffbbffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffbbbbbffffffffffffffffffffffffffffffbfffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffcccccfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffcfffffcfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffcfffffcffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffcfffffcffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffcfffffcffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffbbbfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffcfffffcffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffbbfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffcccccfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffbbf
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffff
    bbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
    fffffffffffffbbbffffffffffffffffffffffffffffffffffffffbffffffffffffffcccffffffbfffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffff
    ffffffffffffffffbbffffffffffffffffffffffffffffffffffffbffffffffffffffcfcffffffbffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffcccccfff
    ffffffffffffffffffbfffffffffffffffffffffffffffffffffffbffffffffffffffcccffffffbfffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffcfffcfff
    fffffffffffffffffffbbffffffffffffffffffffffffffffffffffbfffffcfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffcfffcfff
    fffffffffffffffffffffbffffffffffffffffffffffffffffffffffbfffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffcfffcfff
    ffffffffffffffffffffffbfffffffffffffffffffffffffffffffffbfffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffcccccfff
    fffffffffffffffffffffffbfffffffffffffffffffffffffffffffffbfffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffbbfffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcccccccfffffffffffff
    fffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffffffffffffffffbfffffffffffffffffffbfffffffffffffffcfffffffcffffffffffff
    ffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffcfffffffcffffffffffff
    ffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffff
    fffffffffffffffffffcccccccfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffff
    ffffffffffffffffffcfffffffcfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffff
    fffffffcccffffffffcfffffffcfbffffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffff
    fffffffcfcffffffffcfffffffcffbfffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcfffffffcffffffffffff
    fffffffcccffffffffcfffffffcffbfffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffcccccccfffffffffffff
    ffffffffffffffffffcfffffffcffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcccccccffffffffffffffffffffffffff
    ffffffffffffffffffcfffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffcfffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    fffffffffffffffffffcccccccffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffcfffffffcfffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcccccccffffffffffffffffffffffffff
    ffcccccfffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffffcccccfffffffff
    ffcfffcfffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffcfffcfffffffff
    ffcfffcfffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffcfffcfffffffff
    ffcfffcfffffffffffffcccfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffcfffcfffffffff
    ffcccccfffffffffffffcfcfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffffffcccccfffffffff
    ffffffffffffffffffffcccfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffbfffffffffffffffffffffbffffffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffff
    ffffffffffcffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbfffffffffffffffffffffffffffffffffffbffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffb
    ffffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffbbf
    fffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffffbbfff
    ffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffbbbfffff
    ffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffffffffffffffffffffffbbbbbbbbbbbbbffffffff
    fffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffbbffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffbbbfffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffff
    bbbbbbbbbbbbbffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbfffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcccfffbffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffbfffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcfcfffbffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcccfffbffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbfffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbfffffffffffffffffffff
    `)
Nave_Espacial = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . a a . . 1 1 . . a a . . . 
    . . . 1 1 . 1 a a 1 . 1 1 . . . 
    . . . 1 1 c 1 1 1 1 c 1 1 . . . 
    . . a 1 1 1 1 1 1 1 1 1 1 a . . 
    . a 1 1 1 1 1 1 1 1 1 1 1 1 a . 
    a a 1 1 1 1 1 a a 1 1 1 1 1 a a 
    a 1 1 1 1 1 a . . a 1 1 1 1 1 a 
    a 1 1 1 a a . . . . a a 1 1 1 a 
    a 1 1 a . . . . . . . . a 1 1 a 
    c a a . . . . . . . . . . a a c 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Nave_Espacial.setStayInScreen(true)
Nave_Espacial.setPosition(78, 102)
info.setLife(3)
info.setScore(0)
controller.moveSprite(Nave_Espacial, 200, 150)
forever(function () {
    if (info.score() == 200) {
        game.gameOver(true)
    }
})
game.onUpdateInterval(500, function () {
    Nave_Enemiga = sprites.create(img`
        . . 2 . . . . . . . . 2 . . . . 
        . 2 8 2 . 8 8 8 8 . 2 8 2 . . . 
        . . 8 8 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 2 2 8 8 8 . . . . . 
        . . 8 f 8 2 2 2 2 8 f 8 . . . . 
        . . 8 f f 2 2 2 2 f f 8 . . . . 
        . . . 8 8 8 2 2 8 8 8 . . . . . 
        . . 8 . . 8 8 8 8 . . 8 . . . . 
        . 2 8 2 . 8 f f 8 . 2 8 2 . . . 
        . . 2 . . . . . . . . 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Nave_Enemiga.setVelocity(0, 80)
    Nave_Enemiga.setPosition(randint(0, 120), 0)
})
