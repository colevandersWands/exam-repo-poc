const state = {
  userName: '',
  report: {},
  evaluation: {},
  repoName: window.location.pathname.split('index.html').join('')
}

const actions = {
  fetchStudentReport: (userName) => {
    state.userName = userName;
    fetch('https://' + userName + '.github.io/' + state.repoName + './report.json')
      .then(resp => resp.json())
      .then(report => state.report = report)
      .catch(err => state.report = err)
  },
  gradeStudentReport: () => {
    const newEvaluation = {};
    if (state.report.hasOwnProperty('three')) {
      newEvaluation.three = state.report.three === true
        ? "pass"
        : "fail";
    } else {
      newEvaluation.three = 'missing solution';
    }

    if (state.report.hasOwnProperty('four')) {
      newEvaluation.three = state.report.four[0] === 'bye'
        ? "pass"
        : "fail";
    } else {
      newEvaluation.four = 'missing solution';
    }

    state.evaluation = newEvaluation;
  }
}
