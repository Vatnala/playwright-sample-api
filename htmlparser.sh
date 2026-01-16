#!/bin/bash
R=$(grep -o "name=.*.tests.*.failures.*.skipped.*.errors.*.time.*." index.xml);
echo "R--->   " $R
SUMMARY="`echo $R | awk -vg=$group -vFS='"' '{
         printf( " TOTAL TESTS ==> %-2s | PASSED ==> %-2s | FAILED ==> %-2s | SKIPPED ==> %-2s | ERRORS ==> %-2s | TIME ==> %-1s secs", $4, $4-$6 , $6, $8, $10, $12, $14) } '`"
# echo "--------------------------------------------------------------------------" >> finalreport.txt
echo $SUMMARY
echo "SUMMARY=$SUMMARY" >> $GITHUB_ENV