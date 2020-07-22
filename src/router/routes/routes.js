/**
 * @author songyao
 * Date: 2020/07/20
 */

export default{
    'UI':[
        {
            name:'app',
            path:'/',
            type:'page',
            desc: '引导页'
        },
        {
            name:'index',
            path:'/index',
            type:'page',
            desc:'首页', 
            children:[
                {
                    name: 'guide',
                    path:'/index/guide',
                    type:'page',
                    desc:'介绍'
                }
            ] 
        },
        
    ],
    
}