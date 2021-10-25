#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NeedfoodStack } from '../lib/needfood-stack';

const app = new cdk.App();
new NeedfoodStack(app, 'NeedfoodStack', {
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }
});
