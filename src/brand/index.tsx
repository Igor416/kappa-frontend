import { useParams } from "react-router-dom";
import { Divider, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion, Variants } from 'motion/react';
import { useRoutes } from "../hooks";
import { Container, Image } from "../components";
import { Products } from "./products";

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const imageItem: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

export function Brand() {
  const { brand } = useParams()
  const { route } = useRoutes()
  const { t } = useTranslation('brand')

  return <Stack>
    <motion.div
      key={`image-${brand}`}
      variants={imageItem}
      initial='hidden'
      animate='show'
    >
      <Image
        srcList={`/static/assets/brands/${brand}.jpg`}
        alt={`brand ${brand} image`}
        style={{width: '100%', height: 'auto'}}
        fetchPriority='high'
      />
    </motion.div>
    <Container>
      <motion.div
        key={`content-${brand}`}
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
      >
        <Stack gap={4}>
          <motion.div variants={item}>
            <Typography variant='h3' color='primary'>{route.label}</Typography>
          </motion.div>
          <motion.div variants={item}>
            <Divider />
          </motion.div>
          <motion.div variants={item}>
            <Typography variant='h6'>{t(brand + '_desc')}</Typography>
          </motion.div>
          <motion.div variants={item}>
            <Products label={route.label} slug={route.slug} />
          </motion.div>
        </Stack>
      </motion.div>
    </Container>
  </Stack>
}