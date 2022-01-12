import React from 'react'
import { SContainer } from 'components/PageContainer/styled'
import * as S from './styled'
import CompensationCard from './CompensationCard'

const CompensationPage: React.FC = () => {
    return (
        <SContainer>
            <S.SCompensation>
                <div>text here</div>
                <CompensationCard />
            </S.SCompensation>
        </SContainer>
    )
}

export default CompensationPage