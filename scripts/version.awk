#!/usr/bin/awk -f

function readPackageVersion(file) {
    versionString = "";
    while ((getline line < file) > 0) {
        where = match(line, /"version":/);
        if (where) {
            versionString = line;
            break;
        }
    }
    close(file);
    return versionString;
}

BEGIN {
    version = readPackageVersion("package.json");
    value = substr(version, 14);
    result = substr(substr(value, 1, length(value) -2), 2);
    print(result);
    exitCode = result == "" ? 1 : 0;
    exit exitCode;
} { } END {
}

