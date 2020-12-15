# Write to file action

Writes content to file.

## Inputs

### `filepath`

**Required** Where to create the file. Missing directories will be created. Default `"file"`.

### `content`

**Required** What to write to file.

### `mode`

Specify file permissions. Default `"0600"`

## Example usage

uses: actions/write-to-file@v1.0
with:
  filepath: /tmp/tempdir/myfile
  content: tempstuff
  mode: 0655