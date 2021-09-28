#!/bin/bash

PATH_STUDENTS=/home/profe/dev/src/dwec2021/students

function pullOne() {
    PATH_STUDENT=$1
    cd ${PATH_STUDENT}
    git pull
}

for dir in ${PATH_STUDENTS}/*/     # list directories 
do
  echo "Pulling ${dir} ..."
  pullOne ${dir}
done