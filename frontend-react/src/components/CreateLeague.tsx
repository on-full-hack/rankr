import React from 'react';
import { Formik } from 'formik';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createLeague } from '../lib/store/leagues/actions';

const useStyles = makeStyles({
  root: {
    padding: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: '5px',
    },
  },
});

export const CreateLeague = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <Formik
        initialValues={{ name: '', description: '', discipline: '', type: '' }}
        onSubmit={async values => {
          dispatch(createLeague(values));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              value={values.name}
              name="name"
              onChange={handleChange}
              label="Name"
              variant="outlined"
            />
            <TextField
              value={values.description}
              name="description"
              onChange={handleChange}
              label="Description"
              variant="outlined"
            />
            <TextField
              value={values.discipline}
              name="discipline"
              onChange={handleChange}
              label="Discipline"
              variant="outlined"
            />
            <TextField
              value={values.type}
              name="type"
              onChange={handleChange}
              label="Type"
              variant="outlined"
            />
            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
