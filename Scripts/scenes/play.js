var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Add Play Label
            this._playLabel = new objects.Label("PLAY SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 200);
            this.addChild(this._playLabel);
            //Add Rolll Button to the Play Scene
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            //add Event listener for Roll button
            this._rollButton.on("click", this._rollButtonClick, this);
            //Initialize Hand
            this._hand = new Array(); //instantiate reels bitmap 
            var rand1 = Math.floor((Math.random() * 6) + 1);
            console.log("rand1= " + rand1);
            var rand2 = Math.floor((Math.random() * 6) + 1);
            console.log("rand2= " + rand2);
            // for (var die:number = 0; die < 2; die++)
            //{
            switch (rand1) {
                case 1:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("One"));
                    break;
                case 2:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Two"));
                    break;
                case 3:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Three"));
                    break;
                case 4:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Four"));
                    break;
                case 5:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Five"));
                    break;
                case 6:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Six"));
                    break;
            }
            //this._hand[0] = new createjs.Bitmap(assets.getResult("One"));
            this._hand[0].x = 193; //+ (die * 120);
            this._hand[0].y = 217;
            this.addChild(this._hand[0]);
            switch (rand2) {
                case 1:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("One"));
                    break;
                case 2:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("Two"));
                    break;
                case 3:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("Three"));
                    break;
                case 4:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("Four"));
                    break;
                case 5:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("Five"));
                    break;
                case 6:
                    this._hand[1] = new createjs.Bitmap(assets.getResult("Six"));
                    break;
            }
            //this._hand[0] = new createjs.Bitmap(assets.getResult("One"));
            this._hand[1].x = 193 + 120; //+ (die * 120);
            this._hand[1].y = 217;
            this.addChild(this._hand[1]);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //Roll button click event handler
        Play.prototype._rollButtonClick = function (event) {
            scene = config.Scene.PLAY;
            changeScene();
            /*
            var rand1 = Math.floor((Math.random() * 6) + 1);
            var rand2 = Math.floor((Math.random() * 6) + 1);
            
            
            //this.removeChild(this._hand[0]);
            
            switch(rand1)
                {
                                       
                    case 1:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("One"));
                    
                    case 2:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Two"));
                    
                    case 3:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Three"));
                    
                    case 4:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Four"));
                    
                    case 5:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Five"));
                    
                    case 6:
                    this._hand[0] = new createjs.Bitmap(assets.getResult("Six"));
                    
                  
                }
                stage.addChild(this._hand[0]);
                */
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {})); //scene
//# sourceMappingURL=play.js.map