import React, { Component } from 'react';
import { Modal, Form, Radio, Input,Select } from 'antd';
import style from './Interface.css'

const FormItem = Form.Item;

class InterfaceEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };
  CheckJSON = (rule,value, callback) => {
    console.log(value, 1111);
    if (typeof value === 'string') {
      try {
        JSON.parse(value);
        callback()
      } catch(e) {
        console.log(e);
        callback('请输入JSON格式')
      }
    }
};

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { _id, protocol, method, data_type, response_type, request_parameter, Interface_address, Interface_header } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="添加模板"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="名称"
            >
              {
                getFieldDecorator('_id', {
                  initialValue: _id,
                  rules: [{ required: true, message: '请输入名称!' }],
                })(<Input />)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="协议"
            >
              {
                getFieldDecorator('protocol', {
                  initialValue: protocol,
                })(
                  <Radio.Group >
                    <Radio value="HTTP">HTTP</Radio>
                    <Radio value="HTTPS">HTTPS</Radio>
                  </Radio.Group>)
              }
            </FormItem>
            <FormItem
            className={ style.FormItem }
            {...formItemLayout}
            label="method"
          >
              {
                getFieldDecorator('method', {
                  initialValue: method,
                })(
                  <Radio.Group >
                    <Radio value="POST">POST</Radio>
                    <Radio value="GET">GET</Radio>
                  </Radio.Group>)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="请求类型"
            >
              {
                getFieldDecorator('data_type', {
                  initialValue: data_type,
                })(
                  <Select style={{ width: 240 }}>
                    <Select.Option value="application/json">(JSON)application/json</Select.Option>
                  </Select>)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="响应类型"
            >
              {
                getFieldDecorator('response_type', {
                  initialValue: response_type,
                })(
                  <Select style={{ width: 240 }}>
                    <Select.Option value="application/json">(JSON)application/json</Select.Option>
                  </Select>)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="接口地址"
            >
              {
                getFieldDecorator('Interface_address', {
                  initialValue: Interface_address,
                  rules: [{ required: true, type: 'url', message: '请输入正确的接口地址!' }],
                })(<Input />)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="Headers">
                {
                  getFieldDecorator('Interface_header', {
                    initialValue: Interface_header,
                    rules: [{
                      required: true, message: '不能为空！',
                    }, {
                      validator: this.CheckJSON,
                    }],
                  })(<Input type="textarea" />)
                }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="参数">
                {
                  getFieldDecorator('request_parameter', {
                    initialValue: request_parameter,
                    rules: [{
                      required: true, message: '不能为空！',
                    }, {
                      validator: this.CheckJSON,
                    }],
                  })(<Input type="textarea" />)
                }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(InterfaceEditModal);
