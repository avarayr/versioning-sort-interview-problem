export function sortVersions (versions: Array<string>) {

  const versionToDouble = (version: string): number => {
    const [leading, ...rest] = version.split('.')
    return Number(`${leading}.${rest.join('')}`)
  }

  return versions.sort((a: string, b: string) => {
    return versionToDouble(b) - versionToDouble(a)
  })
}