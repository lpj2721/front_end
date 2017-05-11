/**
 * Created by WL on 2017/5/10.
 */
import React, { Component } from 'react';
import { Modal, Form, Radio, Input,Select } from 'antd';
import style from './HeaderModal.css'

const FormItem = Form.Item;

class HeaderEditModal extends Component {
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
        console.log(1112,values);
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { _id, parameter_rules, header_rules } = this.props.record;
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
                })(<Input disabled="true" />)
              }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="Header配置">
                {
                  getFieldDecorator('header_rules', {
                    initialValue: header_rules,
                  })(<Input  className={ style.input } type="textarea" />)
                }
            </FormItem>
            <FormItem
              className={ style.FormItem }
              {...formItemLayout}
              label="参数配置">
                {
                  getFieldDecorator('parameter_rules', {
                    initialValue: parameter_rules,
                  })(<Input type="textarea" />)
                }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(HeaderEditModal);
