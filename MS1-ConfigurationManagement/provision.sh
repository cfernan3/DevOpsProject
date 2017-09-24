#!/bin/bash
mkdir /home/vagrant/VM1
mkdir /home/vagrant/VM2
cd /home/vagrant/VM1
vagrant init ubuntu/trusty64
cd ..
cd /home/vagrant/VM2
vagrant init ubuntu/trusty64

