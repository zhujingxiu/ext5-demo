/** 
 * 系统的主菜单条，根据MainModel中的数据来生成，可以切换至按钮菜单，菜单树 
 */
Ext.define('app.view.main.region.MainMenuToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainmenutoolbar',

    defaults: {
        xtype: 'buttontransparent'
    },

    items: [{
        glyph: 0xf100,
        tooltip: '在左边栏中显示树状菜单', // 几种菜单样式切换的按钮  
        disableMouseOver: true,
        margin: '0 -5 0 0'
    }, {
        glyph: 0xf102,
        tooltip: '在顶部区域显示菜单', // 几种菜单样式切换的按钮  
        disableMouseOver: true
    }],

    viewModel: 'main', // 指定viewModel为main  

    initComponent: function() {

        // 把ViewModel中生成的菜单items加到此toolbar的items中  
        this.items = this.items.concat(this.getViewModel().getMenus());

        this.callParent();
    }
});