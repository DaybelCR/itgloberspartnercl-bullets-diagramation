import React from 'react';
import { BulletsSchema } from '../BulletTypes';
import Bullet from '../Bullet';



export const getBulletsAsTSXList=(
bullets: BulletsSchema 
)=>(
    bullets.map((bullet:any,index)=>{
        console.log('bullet',bullet)
     return <Bullet 
                key={index}
                src={bullet.image}
                titleBullet={bullet.titleBullet}
                link={
                    bullet.link
                    ? bullet.link
                    :
                    {
                        url:"",
                        attributeNoFollow:false,
                        attributeTitle:"",
                        openNewTab:false,
                        newTab:false
                    }
                }
             />
    })
)