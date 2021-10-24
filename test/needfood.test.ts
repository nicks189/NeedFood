import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Needfood from '../lib/needfood-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Needfood.NeedfoodStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
