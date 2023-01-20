// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":return tiles.createTilemap(hex`2000200001010101010101010101010101010101010101010101010101010101010b0101010108010a010b010801010a01010108010b010a0101010801010a010a010101010101010101010101010a01010b010101010101010b0101010101010101010b0d0202020202020202020202020202020202020202020202020202020301010101010101010101010a01010101010101010101010101010101010101050a01010101010a0109010b010101010901010a01010109010101010a0101010501010101010b01010101010101010101010101010101010101010101010101050b010101010a01010101010101010b0101010101010b0101010101010101010501010a0101010108010a010108010101010801010a0101080101010a010801050101010101010101010101010101010a010101010101010101010101010101050101010101070202020202020202020202020202020202020202020202020204010b010101050b01010101010101010101010101010101010a010101010101010a0101010a0501010109010101010109010101010109010101010901010b01010101010b0105010a010101010a0101010101010a010101010101010b01010101010101010105010101010b0101010a01010b0101010101010101010101010a010101010101050b010b0101010101010101010101010b01010a01010101010101010101010b05010801010108010101010801010a01080101010108010a0108010101010101050101010a010101010a0101010101010101010101010101010101010a010a010602020202020202020202020202020202020202020202020202030101010101010101010b0101010101010101010101010b0101010101010101050101010101010b0101090101010109010101090101010101090101010109010501010a010101010101010101010b01010101010b0101010101010b0101010105010101010a010a010101010a010101010a01010b010a010101010a01010b01050a01010101010101080101010108010101010801010101080101010108010105010a010a01010101010101010101010101010101010101010b010101010101050101010101070202020202020202020202020202020202020202020202020204010101010105010101010101010b010101010101010101010101010101010101010101010105010a010109010a0101010901010a01010901010a010101010a0101010101010501010b0101010101010101010101010101010101010101010101010a010a0105010801010b010108010101010b0a0101010101010108010101010b0101010b050b01010101010b01010a010101010101010a01010101010b0101010101010106020202020202020202020202020202020202020202020202020202020c`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.tile0,sprites.castle.tileGrass1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,myTiles.tile1,myTiles.tile2,sprites.castle.saplingPine,sprites.castle.tileGrass2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
