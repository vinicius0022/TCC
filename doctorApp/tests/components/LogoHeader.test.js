import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import LogoHeader from '../../src/components/LogoHeader';


describe('render', ()=>{

    it('show LogoHeader', () =>{

        const shallowRenderer = new ShallowRenderer();
        shallowRenderer.render(<LogoHeader/>)

        const result = shallowRenderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    })
})