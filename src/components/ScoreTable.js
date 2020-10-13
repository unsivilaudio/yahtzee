import React from 'react';

import RuleRow from './RuleRow';
import '../assets/stylesheets/ScoreTable.css';
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance,
} from '../utils/Rules';

const scoreTable = props => {
    const { scores, doScore } = props;

    return (
        <div className='ScoreTable'>
            <section className='ScoreTable-section'>
                <h2>Upper</h2>
                <table cellSpacing='0'>
                    <tbody>
                        <RuleRow
                            name='Ones'
                            score={scores.ones || '1 point per 1'}
                            doScore={evt => doScore('ones', ones.evalRoll)}
                            enabled={!props.disabledRules.includes('ones')}
                        />
                        <RuleRow
                            name='Twos'
                            score={scores.twos || '2 points per 2'}
                            doScore={evt => doScore('twos', twos.evalRoll)}
                            enabled={!props.disabledRules.includes('twos')}
                        />
                        <RuleRow
                            name='Threes'
                            score={scores.threes || '3 points per 3'}
                            doScore={evt => doScore('threes', threes.evalRoll)}
                            enabled={!props.disabledRules.includes('threes')}
                        />
                        <RuleRow
                            name='Fours'
                            score={scores.fours || '4 points per 4'}
                            doScore={evt => doScore('fours', fours.evalRoll)}
                            enabled={!props.disabledRules.includes('fours')}
                        />
                        <RuleRow
                            name='Fives'
                            score={scores.fives || '5 points per 5'}
                            doScore={evt => doScore('fives', fives.evalRoll)}
                            enabled={!props.disabledRules.includes('fives')}
                        />
                        <RuleRow
                            name='Sixes'
                            score={scores.sixes || '6 points per 6'}
                            doScore={evt => doScore('sixes', sixes.evalRoll)}
                            enabled={!props.disabledRules.includes('sixes')}
                        />
                    </tbody>
                </table>
            </section>
            <section className='ScoreTable-section ScoreTable-section-lower'>
                <h2>Lower</h2>
                <table cellSpacing='0'>
                    <tbody>
                        <RuleRow
                            name='Three of Kind'
                            score={
                                scores.threeOfKind ||
                                'Sum of dice if 3 are the same'
                            }
                            doScore={evt =>
                                doScore('threeOfKind', threeOfKind.evalRoll)
                            }
                            enabled={
                                !props.disabledRules.includes('threeOfKind')
                            }
                        />
                        <RuleRow
                            name='Four of Kind'
                            score={
                                scores.fourOfKind ||
                                'Sum of dice if 4 are the same'
                            }
                            doScore={evt =>
                                doScore('fourOfKind', fourOfKind.evalRoll)
                            }
                            enabled={
                                !props.disabledRules.includes('fourOfKind')
                            }
                        />
                        <RuleRow
                            name='Full House'
                            score={
                                scores.fullHouse || '25 points for a full house'
                            }
                            doScore={evt =>
                                doScore('fullHouse', fullHouse.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('fullHouse')}
                        />
                        <RuleRow
                            name='Small Straight'
                            score={
                                scores.smallStraight ||
                                '30 points for a small straight'
                            }
                            doScore={evt =>
                                doScore('smallStraight', smallStraight.evalRoll)
                            }
                            enabled={
                                !props.disabledRules.includes('smallStraight')
                            }
                        />
                        <RuleRow
                            name='Large Straight'
                            score={
                                scores.largeStraight ||
                                '40 points for a large straight'
                            }
                            doScore={evt =>
                                doScore('largeStraight', largeStraight.evalRoll)
                            }
                            enabled={
                                !props.disabledRules.includes('largeStraight')
                            }
                        />
                        <RuleRow
                            name='Yahtzee'
                            score={scores.yahtzee || '50 points for a yahtzee'}
                            doScore={evt =>
                                doScore('yahtzee', yahtzee.evalRoll)
                            }
                            enabled={!props.disabledRules.includes('yahtzee')}
                        />
                        <RuleRow
                            name='Chance'
                            score={scores.chance || 'Sum of all dice'}
                            doScore={evt => doScore('chance', chance.evalRoll)}
                            enabled={!props.disabledRules.includes('chance')}
                        />
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default scoreTable;
