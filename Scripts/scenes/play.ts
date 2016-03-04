// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);


            //Add Rolll Button to the Play Scene
            this._rollButton = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            
            //add Event listener for Roll button
            this._rollButton.on("click", this._rollButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //Roll button click event handler
        private _rollButtonClick(event: createjs.MouseEvent)
        {
            var rand1 = Math.floor((Math.random() * 6) + 1);
            var rand2 = Math.floor((Math.random() * 6) + 1);
        }
        
    }
}