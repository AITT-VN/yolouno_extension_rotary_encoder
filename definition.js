
const RotaryColorBlock = "#A39400";

Blockly.Blocks["yolouno_rotary_encoder_init"] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      type: "yolouno_rotary_encoder_init",
      message0: "khởi tạo rotary encoder chân A %1 B %2",
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
  }
};

Blockly.Python['yolouno_rotary_encoder_init'] = function (block) {
  var dropdown_clk = block.getFieldValue('CLK');
  var dropdown_dt = block.getFieldValue('DT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_rotary_encoder'] = 'from rotary_encoder import *';
  Blockly.Python.definitions_['init_rotary_encoder'] = 'rotary_encoder = RotaryEncoderIRQ(clk=' + dropdown_clk + '_PIN, dt=' + dropdown_dt + '_PIN)';
  Blockly.Python.definitions_['deinit_rotary_encoder'] = 'rotary_encoder.close()';
  var code = '';
  return code;
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
  }
};

Blockly.Python['yolouno_rotary_encoder_get_value'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = "rotary_encoder.value()";
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['yolouno_rotary_encoder_set_range_value'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt giá trị min %1 max %2 %3",
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
  }
};

Blockly.Python['yolouno_rotary_encoder_set_range_value'] = function (block) {
  var value_min = Blockly.Python.valueToCode(block, 'min', Blockly.Python.ORDER_ATOMIC);
  var value_max = Blockly.Python.valueToCode(block, 'max', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(min_val=' + value_min + ', max_val=' + value_max + ')\n';
  return code;
};

Blockly.Blocks['yolouno_rotary_encoder_mode'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt chế độ %1 %2",
      args0: [
        {
          type: "field_dropdown",
          name: "dir",
          options: [
            ["xoay thuận", "False"],
            ["xoay ngược", "True"],
          ],
        },
        {
          type: "field_dropdown",
          name: "mode",
          options: [
            ["không giới hạn", "RotaryEncoderIRQ.RANGE_UNBOUNDED"],
            ["reset khi tới max", "RotaryEncoderIRQ.RANGE_WRAP"],
            ["dừng tăng khi tới max", "RotaryEncoderIRQ.RANGE_BOUNDED"]
          ],
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  }
};

Blockly.Python['yolouno_rotary_encoder_mode'] = function (block) {
  var dir = block.getFieldValue('dir');
  var mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(reverse=' + dir + ', range_mode=' + mode + ')\n';
  return code;
};


Blockly.Blocks['yolouno_rotary_encoder_set_current_value'] = {
  init: function () {
    this.jsonInit({
      colour: RotaryColorBlock,
      tooltip: "",
      message0: "đặt lại giá trị hiện tại rotary encoder %1 %2",
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
  }
};

Blockly.Python['yolouno_rotary_encoder_set_current_value'] = function (block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.set(value=' + value_value + ')\n';
  return code;
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
            ["xoay trái", " < 0"],
            ["xoay phải", " > 0"],
            ["xoay trái hoặc phải", " != 0"]
          ],
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  }
};


Blockly.Python['yolouno_rotary_encoder_direction'] = function (block) {
  Blockly.Python.definitions_['import_rotary_encoder'] = 'from rotary_encoder import *';
  var dropdown_lr = block.getFieldValue('LR');
  // TODO: Assemble Python into code variable.
  var code = 'rotary_encoder.get_steps()' + dropdown_lr;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};