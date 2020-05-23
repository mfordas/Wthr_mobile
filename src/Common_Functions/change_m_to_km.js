export function changeMetersPerSecondToKMetersPerHour(windSpeedInMperS) {
    const windInKMperH = Math.round((windSpeedInMperS*36)/10);
    return windInKMperH;
}