#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { TestDeploymentStack } from "../lib/test_deployment-stack";

const app = new cdk.App();
new TestDeploymentStack(app, "TestDeploymentStack", {});
