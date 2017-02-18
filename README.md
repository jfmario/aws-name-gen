
# Name Gen #

This fantasy name generator
is a concept project I started to work with Angular 2 and Amazon S3.

## Process #

The Angular site, located at https://name-gen.johnfmarion.com, reaches out
to Amazon S3 to locate a config file to see what languages are currently
installed. When you select a language, it reaches out to Amazon S3 again
to get the configuration for that particular language, then it generates
names based on that configuration.

Currently, everything works, but it provides bad names like:
Lillifek Thedhodothuy, I'ithutik Weshohhoaijaw, and Ghe'eweez Uwee.
Such names are certainly in the ballpark of what I wanted, but some serious
post-generation cleaning is in order.

## Adding Languages #

Adding languages is as simple as adding a config file for the new language
and adding that language to the `languages.json` configuration.

## Current Languages #

* Pavach
* Rubaghi