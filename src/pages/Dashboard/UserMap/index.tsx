import React from 'react'

import {PageContainer} from "@ant-design/pro-components";
import { Scene, EarthLayer, LineLayer } from '@antv/l7';
import { Earth } from '@antv/l7-maps';
import {useEffect} from 'react'
const UserMap:React.FC =()=>{

    useEffect(()=>{
        const scene = new Scene({
            id: 'usermap',
            map: new Earth({})
        });

// 地球模式下背景色默认为 #000 通过 setBgColor 方法我们可以设置可视化层的背景色
        scene.setBgColor('#333');

        const earthlayer = new EarthLayer()
            .source(
                'https://gw.alipayobjects.com/mdn/rms_23a451/afts/img/A*3-3NSpqRqUoAAAAAAAAAAAAAARQnAQ',
                {
                    parser: {
                        type: 'image'
                    }
                }
            )
            .color('#2E8AE6')
            .shape('fill')
            .style({
                globalOptions: {
                    ambientRatio: 0.6, // 环境光
                    diffuseRatio: 0.4, // 漫反射
                    specularRatio: 0.1 // 高光反射
                }
            })
            .animate(true);

        const atomLayer = new EarthLayer()
            .color('#2E8AE6')
            .shape('atomSphere');

        const bloomLayer = new EarthLayer().color('#fff').shape('bloomSphere')
            .style({
                opacity: 0.7
            });

        scene.on('loaded', () => {
            scene.addLayer(earthlayer);

            scene.addLayer(atomLayer);
            scene.addLayer(bloomLayer);





        });



    },[])
    // earthlayer.setEarthTime(4.0);
    return <PageContainer>
        <div id={'usermap'}></div>
    </PageContainer>
}

export default UserMap