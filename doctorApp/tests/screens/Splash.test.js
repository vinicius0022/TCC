import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Splash from '../../src/screens/Splash'

describe('Splash', () => {
    it('render', () => {

            //given
            const shallowRenderer = new ShallowRenderer();
            
            //when
            shallowRenderer.render(<Splash/>);
            const result = shallowRenderer.getRenderOutput();

            //Then
            expect(result).toMatchSnapshot();
    });
});