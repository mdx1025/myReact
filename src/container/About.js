import React, { Component } from 'react';
import '../css/About.scss';
// import QAList from '../constants/QAList.json';
const QAList=[
    {
      "title": " 什么是富民白条？",
      "content": "富民白条富民银行与电商平台运用金融科技手段，结合大数据风控模型，提供给小微企业主的主要用于小微企业的日常经营中小额高频采购的个人类经营性贷款产品。一次授信，循环使用，按日计息，随借随还。"
    },
    {
      "title": "激活富民白条所需资料？",
      "content": "1.借款人身份证原件正反面照片；|2.营业执照原件照片及借款人手持营业执照原件照片。"
    },
    {
      "title": "富民白条有没有免息期？",
      "content": "没有，富民白条支付当日开始计息。"
    },
    {
      "title": "富民白条利率是多少？ ",
      "content": "根据客户不同的资信情况，利率会有所区别。执行日利率万分之三至万分之五之间，无其他费用。"
    }
  ];
export default class About extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        document.title = '关于白条';
    }

    render() {
        return (
            <div className="about-wap">
                <div className="about-container">
                    {QAList.map((qa, i) => {
                        return <QAItem key={i} title={qa.title} content={qa.content}/>
                    })}
                </div>
            </div>
        )
    }
}

class QAItem extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isExpand: false,//默认不展开
        };

        this._toggleContent = this._toggleContent.bind(this);
    }

    render() {
        const { title, content } = this.props;
        const { isExpand } = this.state;
        const style = isExpand ? '' : 'twoLines';
        const arrow = isExpand ? require('../img/arrow-up.png') : require('../img/arrow-down.png');
        const text = isExpand ? '折叠' : '展开';

        const isMultipleLines = content.indexOf('|') > 0;//是否多行展示
        let contentList = isMultipleLines ? content.split("|") : [content];//内容列表，方便循环
        let isShowMore = isMultipleLines || (Math.round((27 * 2 - 2) / 1.2) <= content.length);//true 展示
        let h = isShowMore ? null : { height: 'auto' };
        return <section>
            <article>
                <p className="title">{title}</p>
                <div className={style} style={h}>
                    {contentList.map((ctn, i) => {
                        return <p key={i} className={'content'}>{ctn}</p>
                    })}
                </div>
            </article>
            {isShowMore ? <div className="checkMore" onTouchStart={this._toggleContent}>
                <img src={arrow} alt=''/>
                <span>{text}</span>
            </div> : null}
        </section>
    }

    _toggleContent() {
        this.setState({ isExpand: !this.state.isExpand });
    }
}