// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
        private _hand:createjs.Bitmap[]; //array for both dice
        
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
                config.Screen.CENTER_X,config.Screen.CENTER_Y - 200);
            this.addChild(this._playLabel);


            //Add Rolll Button to the Play Scene
            this._rollButton = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rollButton);
            
            //add Event listener for Roll button
            this._rollButton.on("click", this._rollButtonClick, this);
            
            //Initialize Hand
            this._hand = new Array<createjs.Bitmap>();//instantiate reels bitmap 
            for (var die:number = 0; die < 2; die++)
            {
                this._hand[die] = new createjs.Bitmap(assets.getResult("One"));
                this._hand[die].x = 193 + (die * 120);
                this._hand[die].y = 217;
  
                this.addChild(this._hand[die]);
                
                console.log("Die" + die + " " + this._hand[die]);
            }

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