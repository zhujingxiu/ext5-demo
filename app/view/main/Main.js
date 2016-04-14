/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('app.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'app.view.main.MainController',
        'app.view.main.MainModel'
    ],
    uses: ['app.view.main.region.Center', 'app.view.main.region.Top', 'app.view.main.region.Bottom', 'app.view.main.region.MainMenuToolbar'], //
    xtype: 'app-main',

    controller: 'main',
    initComponent: function() {
        Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性  
        this.callParent();
    },
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
            xtype: 'maintop',
            region: 'north' // 把他放在最顶上  
        }, {
            xtype: 'mainmenutoolbar',
            region: 'north' // 把他放在maintop的下面  
        }, {
            xtype: 'mainbottom',
            region: 'south' // 把他放在最底下  
        }, {
            region: 'center', // 中间面版  
            xtype: 'maincenter'
        }
        , {
                xtype: 'mainmenutree',
                region: 'west', // 左边面板  
                width: 250,
                split: true
            }, {
                xtype: 'mainmenuaccordion',
                region: 'west', // 左边面板  
                width: 250,
                split: true
            },
    ]
});