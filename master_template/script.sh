#!/bin/bash
cd master-template
terraform init
terraform plan
terraform apply --auto-approve
terraform output > ../newfile.txt
cd ..
cat newfile.txt
