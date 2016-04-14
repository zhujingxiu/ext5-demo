/** 
 * 系统主页的顶部区域，主要放置系统名称，菜单，和一些快捷按钮 
 */
Ext.define('app.view.main.region.Top', {

    extend: 'Ext.toolbar.Toolbar',
    uses: ['app.ux.ButtonTransparent', 'app.view.main.region.ButtonMainMenu','app.view.main.region.MainMenuTree','app.view.main.region.AccordionMainMenu'],
    alias: 'widget.maintop', // 定义了这个组件的xtype类型为maintop  
    defaults: {
        xtype: 'buttontransparent'
    },
    items: [{
        xtype: 'buttonmainmenu'
    }, {
        xtype: 'image',
        bind: { // 数据绑定到MainModel中data的ystem.iconUrl  
            hidden: '{!system.iconUrl}', // 如果system.iconUrl未设置，则此image不显示  
            src: '{system.iconUrl}' // 根据system.iconUrl的设置来加载图片  
        }
    }, {
        xtype: 'label',
        bind: {
            text: '{system.name}' // text值绑定到system.name  
        },
        style: 'font-size : 20px; color : blue;'
    }, {
        xtype: 'label',
        bind: {
            text: '{system.version}'
        }
    }, '->', {
        text: '菜单',
        xtype: 'buttonmainmenu',
        menu: [{
            text: '工程管理',
            menu: [{
                text: '工程项目'
            }, {
                text: '工程标段'
            }]
        }]
    }, ' ', ' ', {
        text: '主页'
    }, {
        text: '帮助'
    }, {
        text: '关于'
    }, {
        text: '注销'
    }, '->', '->', {
        text: '设置'
    }, {
        xtype: 'button',
        bind: {
            text: 'Button',
            handler: 'hiddenTopBottom',
            tooltip: '隐藏顶部和底部区域'
        }

    }]


});