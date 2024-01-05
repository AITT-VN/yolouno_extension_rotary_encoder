const RotaryColorBlock = "#A39400";

var digitalPins = [
  [
    "D3",
    "D3"
  ],
  [
    "D4",
    "D4"
  ],
  [
    "D5",
    "D5"
  ],
  [
    "D6",
    "D6"
  ],
  [
    "D7",
    "D7"
  ],
  [
    "D8",
    "D8"
  ],
  [
    "D9",
    "D9"
  ],
  [
    "D10",
    "D10"
  ],
  [
    "D11",
    "D11"
  ],
  [
    "D12",
    "D12"
  ],
  [
    "D13",
    "D13"
  ],
  [
    "D0",
    "D0"
  ],
  [
    "D1",
    "D1"
  ],
  [
    "D2",
    "D2"
  ]
];

Blockly.Blocks["yolouno_rotary_encoder_init"] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      type: "yolouno_rotary_encoder_init",
      message0: "khởi tạo module led 7 đoạn chân CLK %1 chân DATA %2",
      args0: [
        {
          type: "field_dropdown",
          name: "CLK",
          options: digitalPins
        },
        {
          type: "field_dropdown",
          name: "DT",
          options: digitalPins
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: RotaryColorBlock,
      tooltip: "",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};

Blockly.Blocks['yolouno_rotary_encoder_get_value'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đọc giá trị rotary encoder",
      args0: [],
      output: "Number",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};

Blockly.Blocks['yolouno_rotary_encoder_set_range_value'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt khoảng giá trị cho rotary encoder min %1 max %2 %3",
      args0: [
        {
          "type": "input_value",
          "name": "min"
        },
        {
          "type": "input_value",
          "name": "max"
        },
        {
          "type": "input_dummy",
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};

Blockly.Blocks['yolouno_rotary_encoder_mode'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt chế độ xoay cho rotary encoder %1",
      args0: [
        {
          type: "field_dropdown",
          name: "mode",
          options: [
            ["không giới hạn", " RotaryIRQ.RANGE_UNBOUNDED"],
            ["reset khi quay tới max", "RotaryIRQ.RANGE_WRAP"],
            ["dừng tăng khi quay tới max", "RotaryIRQ.RANGE_BOUNDED"]
          ],
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};

Blockly.Blocks['yolouno_rotary_encoder_set_current_value'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt giá trị hiện tại cho rotary encoder %1 %2",
      args0: [
        {
          "type": "input_value",
          "name": "value"
        },
        {
          "type": "input_dummy",
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};

Blockly.Blocks['yolouno_rotary_encoder_direction'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "rotary encoder được %1",
      args0: [
        {
          type: "field_dropdown",
          name: "LR",
          options: [
            ["xoay qua trái", " < 0"],
            ["xoay qua phải", " > 0"]
          ],
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
  getDeveloperVars: function () {
    return ["rotary_encoder"];
  },
};


Blockly.Python['yolouno_rotary_encoder_init'] = function (block) {
  var dropdown_clk = block.getFieldValue('CLK');
  var dropdown_dt = block.getFieldValue('DT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_rotary'] = 'from rotary import *';
  Blockly.Python.definitions_['init_tm1637'] = 'rotary_encoder = RotaryIRQ(clk=' + dropdown_clk + '_PIN, dt=' + dropdown_dt + '_PIN, min_val=0, max_val=10, reverse=True, range_mode=RotaryIRQ.RANGE_UNBOUNDED, pull_up=False)';
  var code = '';
  return code;
};

Blockly.Python['yolouno_rotary_encoder_get_value'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "rotary_encoder.value()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['yolouno_rotary_encoder_set_range_value'] = function (block) {
  var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'max', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(min_val=' + value_min + ', max_val=' + value_max + ', range_mode=RotaryIRQ.RANGE_WRAP)\n';
  return code;
};

Blockly.Python['yolouno_rotary_encoder_mode'] = function (block) {
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(range_mode=' + dropdown_mode + ')\n';
  return code;
};

Blockly.Python['yolouno_rotary_encoder_set_current_value'] = function (block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(value=' + value_value + ')\n';
  return code;
};

Blockly.Python['yolouno_rotary_encoder_direction'] = function (block) {
  Blockly.Python.definitions_['import_rotary'] = 'from rotary import rotary_encoder';
  var dropdown_lr = block.getFieldValue('LR');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.get_steps()' + dropdown_lr;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};