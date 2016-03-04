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
            
            var rand1 = Math.floor((Math.random() * 6) + 1);
            console.log("rand1= "+ rand1);
            var rand2 = Math.floor((Math.random() * 6) + 1);
            console.log("rand2= "+ rand2);
            
            
           // for (var die:number = 0; die < 2; die++)
            //{
                switch(rand1)
                {                                       
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
                this._hand[0].x = 193 ;//+ (die * 120);
                this._hand[0].y = 217;
  
                this.addChild(this._hand[0]);
                
                
                
                switch(rand2)
                {                                
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
                this._hand[1].x = 193+120 ;//+ (die * 120);
                this._hand[1].y = 217;
  
                this.addChild(this._hand[1]);
                
               

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
            }
            
            
        }
        
    }//scene
