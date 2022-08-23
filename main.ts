let mySprite: Sprite = null
controller.moveSprite(mySprite)
music.baDing.play()
game.onUpdate(function () {
    scene.setBackgroundColor(2)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d . . . . . . . . . 
        . . . . c c c . . . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . . d d d d d . . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . f . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
