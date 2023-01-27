export const starRate = (rate) => {
  switch (rate) {
    case 1: {
      return `
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    `;
    }
    case 2: {
      return `
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    `;
    }
    case 3: {
      return `
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    `;
    }
    case 4: {
      return `
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star"></i>
    `;
    }
    case 5: {
      return `
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    <i class="fa fa-star gold"></i>
    `;
    }
    default:
      break;
  }
};
