#!/bin/bash
pwd
terraform init
terraform plan
terraform apply --auto-approve
terraform output > /var/lib/jenkins/workspace/resume-test-run/newfile.txt
cd ..
cat newfile.txt
