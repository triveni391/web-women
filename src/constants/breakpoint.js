const breakPoints = {
    mobile: "500px",
    smallMoble: "320px"
};

export const media = {
    mobileOnly: `@media(max-width: ${breakPoints.mobile})`,
    smallMobleOnly: `@media(max-width: ${breakPoints.smallMoble})`
};