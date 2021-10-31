import { Code, Function, Runtime } from "@aws-cdk/aws-lambda";
import { RetentionDays } from "@aws-cdk/aws-logs";
import { Construct, Stack, StackProps } from "@aws-cdk/core";

export class NeedfoodStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lookupLambda = new Function(this, 'Lookup', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'Lookup.lookup',
      logRetention: RetentionDays.THREE_MONTHS,
      code: Code.fromAsset('resources/lambda/build')
    });
  }
}