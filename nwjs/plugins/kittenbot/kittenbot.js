/**
 * Created by Riven on 2016/12/17.
 */

var KittenBot = function (runtime) {
    this.runtime = runtime
    this.color = {
        "primary": "#FF6680",
        "secondary": "#FF4D6A",
        "tertiary": "#FF3355"
    };

};

KittenBot.PULSE_PER_METER = 14124;
KittenBot.BASE_WIDTH = 0.128;

KittenBot.prototype.getBlocks = function () {
    var color = this.color;
    return {
        'rosbot_stepperspeed': {
            /**
             * Block to turn
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_stepperspeed",
                    "message0": "stepper speed L %1 R %2",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "SPEEDL"
                        },
                        {
                            "type": "input_value",
                            "name": "SPEEDR"
                        },
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        "rosbot_motorspeed":{
            /**
             * Block to set motor speed
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_motorspeed",
                    "message0": "motor at speed %1",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "SPEED"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary":color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'rosbot_motorturn':{
            /**
             * Block to turn
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_motorturn",
                    "message0": "motor turn speed %1",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "SPEED"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.primary
                });
            }
        },
        'rosbot_direction_option':{
            /**
             * rosbot_direction_menu
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "%1",
                        "args0": [
                            {
                                "type": "field_dropdown",
                                "name": "ROSBOT_DIRECTION_OPTION",
                                "options": [
                                    ['forward', 'FORWARD'],
                                    ['backward', 'BACKWARD']
                                ]
                            }
                        ],
                        "inputsInline": true,
                        "output": "String",
                        "colour": color.secondary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary
                    });
            }
        },
        'rosbot_turn_option':{
            /**
             * rosbot_turn_menu
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "%1",
                        "args0": [
                            {
                                "type": "field_dropdown",
                                "name": "ROSBOT_TURN_OPTION",
                                "options": [
                                    ['left', 'LEFT'],
                                    ['right', 'RIGHT']
                                ]
                            }
                        ],
                        "inputsInline": true,
                        "output": "String",
                        "colour": color.secondary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary
                    });
            }
        },
        'rosbot_steppermove':{
            /**
             * Block to set motor speed
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_steppermove",
                    "message0": "stepper move %1 cm",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "LENGTH"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'rosbot_stepperturn':{
            /**
             * Block to turn
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_stepperturn",
                    "message0": "stepper turn %1 degrees",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "DEGREE"
                        }
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'rosbot_stop':{
            /**
             * Block to stop the robot
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "id": "rosbot_stop",
                    "message0": "stop",
                    "args0": [
                    ],
                    "inputsInline": true,
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'rosbot_rgb':{
            /**
             * Block to say.
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit({
                    "message0": "rgb pin %1 pixel %2 color %3",
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "PINNUM"
                        },
                        {
                            "type": "input_value",
                            "name": "PIXEL"
                        },
                        {
                            "type": "input_value",
                            "name": "COLOR"
                        }
                    ],
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": color.primary,
                    "colourSecondary": color.secondary,
                    "colourTertiary": color.tertiary
                });
            }
        },
        'rosbot_distance':{
            /**
             * return distance of infra sensor
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "SharpIR distance %1 ",
                        "args0": [
                            {
                                "type": "input_value",
                                "name": "PINNUM"
                            }
                        ],
                        "inputsInline": true,
                        "output": "Number",
                        "colour": color.primary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary,
                        "outputShape": 2
                    });
            }
        },
        'rosbot_power':{
            /**
             * return vin voltage
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "power",
                        "args0": [
                        ],
                        "inputsInline": true,
                        "output": "Number",
                        "colour": color.primary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary,
                        "outputShape": 2
                    });
            }
        },
        'rosbot_ping':{
            /**
             * return distance of ultrasonic sensor
             * @this Blockly.Block
             */
            init: function() {
                this.jsonInit(
                    {
                        "message0": "Ping trig %1 echo %2",
                        "args0": [
                            {
                                "type": "input_value",
                                "name": "TRIGPIN"
                            },
                            {
                                "type": "input_value",
                                "name": "ECHOPIN"
                            },
                        ],
                        "inputsInline": true,
                        "output": "Number",
                        "colour": color.primary,
                        "colourSecondary": color.secondary,
                        "colourTertiary": color.tertiary,
                        "outputShape": 2
                    });
            }
        }


    };
};

KittenBot.prototype.getPrimitives = function() {
    return {
        'rosbot_motorturn': this.motorTurn,
        'rosbot_motorspeed': this.motorSpeed,
        'rosbot_steppermove': this.stepperMove,
        'rosbot_stepperturn': this.stepperTurn,
        'rosbot_stop': this.motorStop,
        'rosbot_rgb': this.rgbPixels,
        'rosbot_distance': this.distance,
        'rosbot_power': this.power,
        'rosbot_ping': this.ping,
        'rosbot_direction_option': this.rosbot_direction_option,
        'rosbot_turn_option': this.rosbot_turn_option
    };
};


KittenBot.prototype.stepperMove = function(argValues, util) {
    var distance = Math.floor(argValues.LENGTH/100*KittenBot.PULSE_PER_METER);
    var cmd = "M101 L"+distance+" R"+(-distance);
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":"M101", "resolve":resolve});
    });
    return exePromise;
};

KittenBot.prototype.stepperTurn = function(argValues, util) {
    var steps = Math.floor(argValues.DEGREE/180.0*3.141*KittenBot.BASE_WIDTH/2.0*KittenBot.PULSE_PER_METER);
    var cmd = "M101 L"+steps+" R"+steps;
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":"M101", "resolve":resolve});
    });
    return exePromise;
};


KittenBot.prototype.motorTurn = function(argValues, util) {
    var spd = argValues.SPEED;
    var cmd = "M200 L"+spd+" R"+spd;
    util.ioQuery('serial', 'sendMsg', cmd);
};

KittenBot.prototype.motorSpeed = function(argValues, util) {
    var spd = argValues.SPEED;
    var cmd = "M200 L"+spd+" R"+(-spd);
    util.ioQuery('serial', 'sendMsg', cmd);
};

KittenBot.prototype.motorStop = function(argValues, util) {
    var cmd = "M102";
    util.ioQuery('serial', 'sendMsg', cmd);
};

KittenBot.prototype.power = function(argValues, util) {
    var cmd = "M8";
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":"M8", "resolve":resolve});
    });
    return exePromise;
};

KittenBot.prototype.rgbPixels = function(argValues, util) {
    var pin = argValues.PINNUM;
    var pix = argValues.PIXEL;
    var color = argValues.COLOR;
    color = Color.hexToRgb(color);
    var cmd = "M9 "+pin+" "+pix+" "+color.r+" "+color.g+" "+color.b;
    util.ioQuery('serial', 'sendMsg', cmd);
};

KittenBot.prototype.distance = function(argValues, util) {
    var pin = argValues.PINNUM;
    var cmd = "M110 "+pin;
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":("M110 "+pin), "resolve":resolve});
    });
    return exePromise;
};

KittenBot.prototype.ping = function(argValues, util) {
    var trigpin = argValues.TRIGPIN;
    var echopin = argValues.ECHOPIN;
    var cmd = "M202 "+trigpin+" "+echopin;
    var exePromise = new Promise(function(resolve) {
        util.ioQuery('serial', 'sendMsg', cmd);
        util.ioQuery('serial', 'regResolve', {"slot":("M202"), "resolve":resolve});
    });
    return exePromise;
};

KittenBot.prototype.rosbot_direction_option = function(argValues, util) {
    return argValues.ROSBOT_DIRECTION_OPTION;
};

KittenBot.prototype.rosbot_turn_option = function(argValues, util) {
    return argValues.ROSBOT_TURN_OPTION;
};



KittenBot.prototype.rosbot_direction_option = function(argValues, util) {
    return argValues.ARDUINO_PIN_MODE_OPTION;
};


KittenBot.prototype.getToolbox = function () {
    return '<category name="Rosbot" colour="#FF6680" secondaryColour="#FF3355">'+
        '<block type="rosbot_motorspeed">'+
        '<value name="SPEED">'+
        '<shadow type="math_number">'+
        '<field name="NUM">150</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_motorturn">'+
        '<value name="SPEED">'+
        '<shadow type="math_number">'+
        '<field name="NUM">100</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<sep></sep>'+
        '<block type="rosbot_steppermove">'+
        '<value name="LENGTH">'+
        '<shadow type="math_number">'+
        '<field name="NUM">100</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_stepperturn">'+
        '<value name="DEGREE">'+
        '<shadow type="math_number">'+
        '<field name="NUM">90</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_stepperspeed">'+
        '<value name="SPEEDL">'+
        '<shadow type="math_number">'+
        '<field name="NUM">200</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="SPEEDR">'+
        '<shadow type="math_number">'+
        '<field name="NUM">200</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_stop">'+
        '</block>'+
        '<block type="rosbot_rgb">'+
        '<value name="PINNUM">'+
        '<shadow type="math_number">'+
        '<field name="NUM">4</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="PIXEL">'+
        '<shadow type="math_number">'+
        '<field name="NUM">0</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="COLOR">'+
        '<shadow type="colour_picker">'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_distance">'+
        '<value name="PINNUM">'+
        '<shadow type="text">'+
        '<field name="TEXT">A3</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '<block type="rosbot_power">'+
        '</block>'+
        '<block type="rosbot_ping">'+
        '<value name="TRIGPIN">'+
        '<shadow type="text">'+
        '<field name="TEXT">11</field>'+
        '</shadow>'+
        '</value>'+
        '<value name="ECHOPIN">'+
        '<shadow type="text">'+
        '<field name="TEXT">12</field>'+
        '</shadow>'+
        '</value>'+
        '</block>'+
        '</category>';
}


module.exports = KittenBot;