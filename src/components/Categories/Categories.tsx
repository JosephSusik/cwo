import { useState } from 'react';
import './Categories.css'
import { soloWomen, soloMen, teamOpen, teamOpenDead } from './CategoriesDefinition';

function Categories() {
    const [selected, setSelected] = useState('teamOpen');

    const handleClick = (str:string) => {
        setSelected(str);
    }
    return(
        <section className='categories'>
            <div className='categories-inner'>
                <div className='categories-select'>
                    <p className='headline'>Kategorie</p>
                    <ul>
                        <li onClick={()=>handleClick('women')}
                            className={selected === 'women'? 'active' : ''}>
                                Jednotlivci - ženy
                        </li>
                        <li onClick={()=>handleClick('men')}
                            className={selected === 'men'? 'active' : ''}>
                            Jednotlivci - muži
                        </li>
                        <li onClick={()=>handleClick('teamOpen')}
                            className={selected === 'teamOpen'? 'active' : ''}>
                            Team Open
                        </li>
                        <li onClick={()=>handleClick('teamOpenDead')}
                            className={selected === 'teamOpenDead'? 'active' : ''}>
                            Team Open - DeadWeight
                        </li>
                    </ul>
                </div>
                <div className='categories-content'>
                    <div>
                        {selected === 'women' && soloWomen}
                        {selected === 'men' && soloMen}
                        {selected === 'teamOpen' && teamOpen}
                        {selected === 'teamOpenDead' && teamOpenDead}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;