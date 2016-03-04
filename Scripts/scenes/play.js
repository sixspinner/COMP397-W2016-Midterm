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
            for (var die = 0; die < 2; die++) {
                this._hand[die] = new createjs.Bitmap(assets.getResult("One"));
                this._hand[die].x = 193 + (die * 120);
                this._hand[die].y = 217;
                this.addChild(this._hand[die]);
                console.log("Die" + die + " " + this._hand[die]);
            }
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //Roll button click event handler
        Play.prototype._rollButtonClick = function (event) {
            var rand1 = Math.floor((Math.random() * 6) + 1);
            var rand2 = Math.floor((Math.random() * 6) + 1);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map