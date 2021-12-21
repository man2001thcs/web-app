import Head from 'next/head';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SendIcon from '@mui/icons-material/Send';
import { DashboardLayout } from '../../components/mem_comp/dashboard-layout';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,

} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Image as ImageIcon } from '../../icons/image';
import { Video as VideoIcon } from '../../icons/video_upload';
import { File as FileIcon } from '../../icons/file_upload';

const Input = styled('input')({
  display: 'none',
});


const Blog_input = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      repassword: '',
      policy: false
    },
    validationSchema: Yup.object({

      firstName: Yup
        .string()
        .max(400000)
        .required(
          'Cần điền nội dung!!')


    }),
    onSubmit: () => {
        router.push('/blog');
    }
  });

  return (
    <>
      <Head>
        <title>
          Register | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'top',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="lr">
          <NextLink
            href="/member"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Blog
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 2 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Blog mới
              </Typography>

            </Box>
            <TextField sx={{maxWidth: 650,
            ml: 3, mt: -1
            }}

              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Here"
              margin="normal"
              name="firstName"
              multiline = 'true'

              minRows = {10}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />


            <Box

            container justify="right"

            sx={{ float: 'left', ml: 3 }}
            >


          {/*button Ảnh*/}
          <label htmlFor="contained-button-file">
          <Input accept="image/*" 
          id="contained-button-file" 
          
          multiple type="file" />
          <Button        
          component="span"
          sx={{ mr: 1 }}

          startIcon={(<ImageIcon fontSize="small" />)}
            >
          Ảnh
          </Button>
          </label>

          {/*button video*/}
          <label htmlFor="contained1-button-file">
          <Input 
          accept="video/*" 
          
          id="contained1-button-file" 
          type="file" />
          <Button
          component='span'
          sx={{ mr: 1 }}

          startIcon={(<VideoIcon fontSize="small" />)}
        >
          Video
        </Button>
        </label>

        {/*File video*/}
        <label htmlFor="contained2-button-file">
        <Input 
        accept="file/*" 
        
        id="contained2-button-file" 
        type="file" />
        <Button
        component='span'
          sx={{ mr: 1 }}

          startIcon={(<FileIcon fontSize="small" />)}
        >
          File khác
        </Button>
        </label>


        <Button sx={{ mr: 1, width: 300, float: 'right' }}
                justify="right"
                startIcon={(<SendIcon fontSize="small" />)}
                color="primary"
                enabled={formik.isSubmitting}
                size="large"
                type="submit"
                variant="contained"
                
              >
                Đăng
        </Button>

      </Box>


            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}

          </form>
        </Container>
      </Box>
    </>
  );
};

Blog_input.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Blog_input;
